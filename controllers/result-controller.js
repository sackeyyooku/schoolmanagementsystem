const { request } = require('express')
const resultModel = require('./../models/results')
// let results = document.getElementById()

class resultController {
    static getResult =(request,response,next) => {
        let results = [];
        resultModel.getResult().then(
            data => {
                results=data;
                response.render('result/index.ejs', {
                    results
                })
            }
        ).catch(
            console.error()
        )
    }
}