
export const fetchCodingNinjasData = async (username) => {
  try{
    
    let today = new Date();
    const date = today.toISOString().split('T')[0];
    const url = `${process.env.CODINGNINJAS_URL}?uuid=${username}&end_date=${date}&start_date=${date}&is_stats_required=true`;
    const options = {
      method: "GET",
    };

    const responce = await fetch(url, options);
    const res = await responce.json();
    
    return res.data;
  }
  catch(e){
    return null
  }
}