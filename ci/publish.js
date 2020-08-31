const chalk = require('chalk'),
    DateFormat = require('fast-date-format'),
    fs = require('fs-extra'),
    path = require('path'),
    sh = require('shelljs');

const env = require('./.env.js')

const base = () => path.resolve(__dirname,'../')

const baseR = (p) => {
    return path.resolve(__dirname,'../',p)
}

const originR = (p) => {
    return path.resolve(path.resolve(env.origin),p)
}

const commitGit =  (comments,merged)=> {
    if(!sh.which('git')) {
        console.log(chalk.redBright('unfound git shell in env...'))
        process.exit(1)
    }

    merged = merged === undefined ? false : Boolean(merged)

    let currentBranch = sh.exec('git symbolic-ref --short -q HEAD',{silent:true}).stdout
    console.log(chalk.cyanBright('Current Branch :' + currentBranch))

    currentBranch = currentBranch.replace(/[\r\n]/g,"")

    

    let stdout = sh.exec('git add .',{silent:true}).stdout

    if (comments === undefined) comments = "ci commit."

    stdout = sh.exec(`git commit -am "${comments}"`, { silent: true }).stdout
    console.log(chalk.cyanBright('Git commit:\n')+chalk.green(stdout))

    if(stdout.indexOf('nothing to commit') !== -1) {
        return;
    }

    if (merged) {
        let fetchCMD = `git fetch origin ${currentBranch}:_tmp_${currentBranch}`
        stdout = sh.exec(fetchCMD, { silent: true }).stdout

        stdout = sh.exec(`git diff _tmp_${currentBranch}`, { silent: true }).stdout

        console.log(chalk.redBright('Git diff remote:\n'))
        console.log(chalk.cyanBright(stdout))

        stdout = sh.exec(`git merge _tmp_${currentBranch}`, { silent: true }).stdout
        console.log(chalk.blue(stdout))

        stdout = sh.exec('git push', { silent: true }).stdout
        console.log(chalk.greenBright('git push'),stdout)
        stdout = sh.exec(`git branch -d _tmp_${currentBranch}`, { silent: true }).stdout
        console.log(chalk.greenBright(stdout))
    }else {
        stdout = sh.exec('git pull', { silent: true }).stdout
        console.log(chalk.cyanBright(stdout))
        stdout = sh.exec('git push', { silent: true }).stdout
        console.log(chalk.greenBright('git push'), stdout)
    }
}

function cleanBasePath() {
    env.includes.map((m) => {
        if(typeof m === 'string'){
            fs.removeSync(baseR(m))
        } else if (typeof m === 'object' && m.regex){
            
            fs.readdir(baseR(''), (err, files) => {
                
                files.map(f =>{
                    const basename = path.basename(f)
                    if (new RegExp(m.regex).test(basename)){
                        fs.removeSync(baseR(basename))
                    }
                    
                })
            })
        }

    })
    //fs.removeSync(baseR('baschain-web**.md'))
}

function copyOrigin() {
    env.includes.map((m) => {
        if (typeof m === 'string'){
            fs.copySync(originR(m), baseR(m), { overwrite: true })
        }else if (typeof m === 'object' && m.regex) {

            //fs.copySync(originR(''), base(), /^**baschain-web**.md$/)
            fs.readdir(originR(''), (err, files) => {
                files.map(f => {
                    const basename = path.basename(f)
                   // console.log("file>>>", f, new RegExp(m.regex).test(basename))
                    if (new RegExp(m.regex).test(basename)) {
                        fs.copySync(originR(basename), baseR(basename), { overwrite: true })
                    }
                })

            })            
        }

    })
}

//cleanBasePath();
//copyOrigin();
pushRelease()

function pushRelease() {
    let comments = 'auto commit'
    
    commitGit(comments,true)
}

