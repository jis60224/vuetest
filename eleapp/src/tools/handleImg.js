function handlImg(width,height,path){
    if(!path){
        return "";
    }
    let realPath = "http://fuss10.elemecdn.com/";
    realPath += path;
    if(path.endsWith("jpeg")){
        realPath += ".jpeg";
    }
    else if(path.endsWith("png")){
        realPath += ".png";
    }
    realPath += `?imageMogr/format/webp/thumbnail/!${width}x${height}r/gravity/Center/crop/${width}x${height}/`
    return realPath;
}

export default handlImg;