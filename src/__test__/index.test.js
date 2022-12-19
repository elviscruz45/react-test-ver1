const randomStrings=require("../index")

describe("Probar funcionalidades de randomStrings",()=>{
    test("Probar la funcionalidad",()=>{
        expect(typeof(randomStrings())).toBe("string")
    })
    test("Comprobrar que no existe una ciudad",()=>{
        expect(randomStrings()).not.toMatch(/Cordoba/)
    })
    
})



const reverseString2=str=>{
    return new Promise((resolve,reject)=>{
        if(!str){
            reject(Error("Error"))
        }
        resolve(str.split("").reverse().join(""))
    })
}