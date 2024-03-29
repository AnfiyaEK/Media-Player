import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

// upload video -store video in http://localhost:3000/allVideos
export const uploadVideoAPI =async (video)=>
{
    // send response to add component
     return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

// get video API called by view component
export const getAllVideosAPI = async ()=>
{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

// store watch history by videocard to http://localhost:3000/history
export const saveHistoryAPI = async (videoDetails)=>
{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

// get history to watch component to http://localhost:3000/history
export const getHistoryAPI = async ()=>
{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// /remove history
export const removeHistoryAPI = async (videoId)=>
{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})

}

// remove video from all videos
export const removeVideoAPI = async (videoId)=>
{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})

}

// save category
export const addCategoryAPI =async (categoryDetails)=>
{
    
     return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}

// get category to category component
export const getCategoryAPI = async ()=>
{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

// remove category API
export const removeCategoryAPI = async (categoryId)=>
{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,{})
    
}

// get single video API
export const getAVideoAPI = async (videoId)=>
{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${videoId}`,"")
}

// updatecategory api
export const updateCategoryAPI = async (categoryId,updatedCategoryDetails)=>
{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails)
}

// getSingleCategory api
export const getSingleCategoryAPI = async (categoryId)=>
{
    return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")
}