const responsive=(device:"mobile"|"tablet",styles:object)=>{
    const maxWidth= device=="mobile"?"480px":"800px"
    let styleString= ""
    //  use underscore  instead for values that need to be seperated by hypen
    // this function converts the  underscore to hyphen 
    Object.keys(styles).forEach((key:string)=>{
        if(key.includes("_")){
             const half1= key.split("_")[0]
             const half2= key.split("_")[1]
             styleString+=`${half1}-${half2}:${styles[key]}; \n`
        }
        else{
            styleString+=`${key}:${styles[key]}; \n`
        }

    })
    return `
    @media (max-width:${maxWidth}){
        ${styleString}
    
    }
    `
}
export default responsive