import { myAxios } from "./Helper";  //to call url

export const signUp=(donar)=>{
    return myAxios.post("/donar/register",donar).then((response)=>response.data)
}