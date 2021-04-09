module.exports=(data,brandParams,genderParams)=>{
    switch (brandParams) {
        case "Ray-Ban":
            switch(genderParams){
                case "all":
                    return data.filter(x=>x.name=="Ray-Ban")
                case "men":
                    return data.filter(x=>x.name=="Ray-Ban" && x.gender=='male')  
                case "women":
                    return data.filter(x=>x.name=="Ray-Ban" && x.gender=='female')
            }
        default:
            break;
    }
    
}