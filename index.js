#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

if (!process.argv[2]) {
    return
}

const packagePath = path.join(process.argv[2], 'package.json')

fs.access(packagePath, fs.constants.F_OK, err => {
    if (err) {
        return
    }

    try {
        const content = require(packagePath)

        if (content.scripts) {
            process.stdout.write(Object.keys(content.scripts).join(' '))
        }
    }
    catch(e) {}
})
