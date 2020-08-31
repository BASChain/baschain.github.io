const fs = require('fs-extra'),
    path = require('path');

const env = require('./.env.js')

const base = () => path.resolve(__dirname,'../')

const baseR = (p) => {
    return path.resolve(__dirname,'../',p)
}

const originR = (p) => {
    return path.resolve(path.resolve(env.origin),p)
}

function cleanBasePath() {
    env.includes.map((m) => {
        console.log(">>>>",baseR(m))
        fs.removeSync(baseR(m))
    })
}

function copyOrigin() {
    env.includes.map((m) => {
        console.log(">>>>", originR(m), "<<>>", baseR(m))
        fs.copySync(originR(m), baseR(m), { overwrite:true})
    })
}

cleanBasePath();
copyOrigin();


