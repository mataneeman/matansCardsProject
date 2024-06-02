import axios from "axios"

const apiUrl= 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users'

export const login = async(userLogin)=>{
    try{
        const { data } = await axios.post(`${apiUrl}/login`,userLogin)
        return data
    }catch(error){
        throw new Error(error.message) 
    }
    
}

export const signup = async(normalizedUser)=>{
    try{
        const { data } = await axios.post(apiUrl,normalizedUser)
        return data
    }catch(error){
        throw new Error(error.message) 
    }
    
}

export const getUserData = async (userId) => {
    try {
      const { data } = await axios.get(`${apiUrl}/${userId}`);
      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  export const editUser = async (userId, normalizeEditUser) => {
    try {
      const { data } = await axios.put(`${apiUrl}/${userId}`, normalizeEditUser);
      return data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  };
  export const changeStatusUser = async (userId) => {
    try {
      const { data } = await axios.patch(`${apiUrl}/${userId}`);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };

  export const getAllUsers = async () => {
    try {
      const { data } = await axios.get(apiUrl);
      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };
  
  export const deleteUser = async (userId) => {
    try {
        await axios.delete(`${apiUrl}/${userId}`);
        return { message: 'User deleted successfully' };
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};