module.exports=(data,brandParams,genderParams)=>{
    switch (brandParams) {
        case "Ray-ban":
            switch(genderParams){
                case "all":
                    return data.filter(x=>x.name=="Ray-ban")
                case "male":
                    return data.filter(x=>x.name=="Ray-ban" && x.gender=='male')  
                case "female":
                    return data.filter(x=>x.name=="Ray-ban" && x.gender=='female')
            }
        default:
            break;
    }
    
}