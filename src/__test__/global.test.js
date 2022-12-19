const text="hola mundo"
const fruits = ["manzana","melon","banana"]


test("Debe contener un texto",()=>{
    expect(text).toMatch(/mundo/)
})


test("Teenmso una Banana",()=>{
    expect(fruits).toContain("banana")
})


test("Mayor que",()=>{
    expect(10).toBeGreaterThan(9)
})


test("verdadero",()=>{
    expect(true).toBeTruthy()
})

//Probar un call back

const reverseString=(str,callback)=>{
    callback(str.split("").reverse().join(""))
}

test("Probar un callback",()=>{
    reverseString("Hola",(str)=>{
        expect(str).toBe("aloH")
    })
})

//Probar una promesa

const reverseString2=str=>{
    return new Promise((resolve,reject)=>{
        if(!str){
            reject(Error("Error"))
        }
        resolve(str.split("").reverse().join(""))
    })
}

test("Probando una promesa",()=>{
    return reverseString2("Hola")
    .then(string=>{expect(string).toBe("aloH")
    })
})

test("Probar async/await",async()=>{
    const string= await reverseString2("hola")
    expect(string).toBe("aloh")
})

// afterEach(()=>console.log("Despues de cada prueba"))
// afterAll(()=>console.log("Despues de todas las pruebas"))

// beforeEach(()=>console.log("Antes de cada prueba"))
// beforeAll(()=>console.log("Antes de todas las pruebas"))