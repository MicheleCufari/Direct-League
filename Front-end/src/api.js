
export const getAll = async(term)=>{
    let url = "http://localhost:8080/clubs";
    if(term !== null && term!== undefined && term !== ""){
      url += "?search=" + term
    }
    const result = await fetch(url)
    const data = await result.json()
    return data;
}

export const getAllPlayer = async()=>{
    const result = await fetch("http://localhost:8080/players")
    const data = await result.json()
    return data;
}

export const getSubscribers = async(term)=>{
    let url = "http://localhost:8080/subscribers";
    if(term !== null && term!== undefined && term !== ""){
      url += "?search=" + term 
    }
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data;
    } catch (error) {
      console.log(error)
    }
}


export const getClubById = async (id) => {
  try {
    const response = await fetch("http://localhost:8080/clubs/" + id)
    const data = await response.json()
    return { ok: response.ok, data: data }
  } catch (error) {
    console.log(error)
  }
}

export const postSubscriber = async (subscriber) => {
  try {
    const response = await fetch("http://localhost:8080/subscribers", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscriber),
    })
    const data = await response.json()
    return { ok: response.ok, data: data }
  } catch (error) {
    return { ok: false, data: error }
  }
}

export const deleteSubscriberById = async (id) => {
  try {
    const response = await fetch("http://localhost:8080/subscribers/" + id, {
      method: 'DELETE',
    })
    return response;
  } catch (error) {
    return { ok: false, data: error }
  }
}

export const deleteNewsById = async (id) => {
  try {
    const response = await fetch("http://localhost:8080/news/" + id, {
      method: 'DELETE',
    })
    return response;
  } catch (error) {
    return { ok: false, data: error }
  }
}

export const getClassifica = async()=>{
    const result = await fetch("http://localhost:8080/matches")
    const data = await result.json()
    return data;
}

export const getClassificaCompleta = async()=>{
    const result = await fetch("http://localhost:8080/matches/class")
    const data = await result.json()
    console.log("getClassificaCompleta: " , data);
    return data;
}

export const putSubscriber = async (subscriber, id) => {
  try {
    const response = await fetch("http://localhost:8080/subscribers/" + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscriber),
    })
    const data = await response.json()
    return { ok: response.ok, data: data }
  } catch (error) {
    return { ok: false, data: error }
  }
}

export const getSubscriberById = async (id) => {
  try {
    const response = await fetch("http://localhost:8080/subscribers/" + id)
    const data = await response.json()
    return { ok: response.ok, data: data }
  } catch (error) {
    console.log(error)
  }
}

export const putMatch = async (match, id) => {
  try {
    const response = await fetch("http://localhost:8080/matches/" + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(match),
    })
    const data = await response.json()
    return { ok: response.ok, data: data }
  } catch (error) {
    return { ok: false, data: error }
  }
}

export const getMatchById = async (id) => {
  try {
    const response = await fetch("http://localhost:8080/matches/" + id)
    const data = await response.json()
    return { ok: response.ok, data: data }
  } catch (error) {
    console.log(error)
  }
}

export const getNews = async(term)=>{
    let url = "http://localhost:8080/news";
    const result = await fetch(url)
    const data = await result.json()
    return data;
}

export const getNewsById = async (id) => {
  try {
    const response = await fetch("http://localhost:8080/news/" + id)
    const data = await response.json()
    return { ok: response.ok, data: data }
  } catch (error) {
    console.log(error)
  }
}

export const postNews = async (news) => {
  try {
    const response = await fetch("http://localhost:8080/news", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(news),
    })
    const data = await response.json()
    return { ok: response.ok, data: data }
  } catch (error) {
    return { ok: false, data: error }
  }
}

export const putNews = async (news, id) => {
  try {
    const response = await fetch("http://localhost:8080/news/" + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(news),
    })
    const data = await response.json()
    return { ok: response.ok, data: data }
  } catch (error) {
    return { ok: false, data: error }
  }
}