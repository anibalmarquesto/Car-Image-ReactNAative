import axios from "axios";

//563492ad6f91700001000001ccb7557888f44fdead000ce2ecb501fb

export const getImages = async (SearchTerm  = "programming") =>
await axios.get(`https://api.pexels.com/v1/search?query=${SearchTerm}`,{
    headers:{
        Authorization:"563492ad6f91700001000001ccb7557888f44fdead000ce2ecb501fb"
    }
});