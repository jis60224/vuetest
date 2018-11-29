import axios from 'axios'
import { resolve } from 'url';
import handleImg from "../../tools/handleImg.js"



//请求地址
export function getAddress(){
	return new Promise((resolve, reject)=>{
		axios.get('/restapi/bgs/poi/reverse_geo_coding', {
			params: {
				latitude: 22.626024,
				longitude: 113.837884
			}
		})
		.then(response=>{
			// console.log(response.data.name);
			resolve({name: response.data.name});
		})
		.catch(error=>{
			console.log(error);
		})
	})
}

//请求首页的活动
export function getActivity(){
	return new Promise((resolve, reject)=>{
		axios.get('/restapi/shopping/v2/entries', {
			'latitude': 22.626024,
			'longitude': 113.837884
		})
		.then(response=>{
			resolve([
				'http://fuss10.elemecdn.com/1/17/5d0711d1153d3686b1938667bed45jpeg.jpeg?imageMogr/format/webp/',
				'http://fuss10.elemecdn.com/0/e7/64044fb6df771e9cb42196ae3eeeejpeg.jpeg?imageMogr/format/webp/'
			]);
		})
		.catch(error=>{
			console.log(error);
		})
	})
}

//请求分类
export function getCategory(){
	return new Promise((resolve,reject)=>{
		axios.get("/restapi/shopping/openapi/entries",{
			params:{
				'latitude': 23.061467,
				'longitude': 113.237106,
				'templates': ['main_template', 'favourable_template', 'svip_template'],
				"terminal":'h5'
			}
		})
		.then(response=>{
			// console.log(response);
			// resolve(response);
			//过滤需要使用的数据
			let newData = response.data[0].entries.map(item=>{
				return {
					name:item.name,
					id:item.id,
					imagePath:handleImg(90,90,item.image_hash)
				}
			})

			let realData = [];
			//将数组10个分割成一个小数组；
			while(newData.length > 0){
				let data = newData.splice(0,10);
				realData.push(data);
			}
			resolve(realData);
		})
		.catch(error=>{
			console.log(error);
			
		})
	})
}

//请求商家列表
export function getSellerData(offset,limit){
	return new Promise((resolve,reject)=>{
		axios.get("/restapi/shopping/v3/restaurants",{
			params:{
				'latitude': 22.626024,
				'longitude': 113.837884,
				'offset': offset,
				'limit': limit,
				'extras': ['activities', 'tags', 'home'],
				'terminal': 'h5'
			}
		})
		.then((response)=>{
			// console.log(response);
			// resolve(response)
			//处理数据
			let newData = response.data.items.map(item=>{
				return {
					isActive: false,//
					name:item.restaurant.name,
					id:item.restaurant.id,
					imagePath:handleImg(130,130,item.restaurant.image_path),
					activities:item.restaurant.activities.map(act=>{
						return {
							name: act.description,
							color: act.icon_color,
							icon: act.icon_name
						}
					})
				}
			});

			resolve(newData);
		})
		.catch(error=>{
			console.log(error);
		})
	})
}