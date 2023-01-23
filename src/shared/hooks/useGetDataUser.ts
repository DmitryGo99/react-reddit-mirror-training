// import axios from "axios";
// import {useEffect, useState} from "react";
// import {useDispatch} from "react-redux";
// import {setToken} from "../store/store";
//
//
// export function useGetDataUser(nameUser: any) {
//     const dispatch = useDispatch();
//     // const tokenDispatch = dispatch(setToken(useToken()))
//     // const token = tokenDispatch.token
//     const [data, setData] = useState({});
//
//     useEffect(() => {
//         if (token && token !== 'undefined') {
//             axios.get(`https://oauth.reddit.com/user/${nameUser}/about`, {
//                 headers: {Authorization: `bearer ${token}`}
//             })
//                 .then((resp) => {
//                     const postData = resp.data;
//                     setData(postData.data)
//                 })
//                 .catch(console.log)
//         }
//     }, [token])
//     return data
// }