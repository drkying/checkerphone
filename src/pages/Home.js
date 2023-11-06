import {useState} from "react";
import axios from "axios";


function Home() {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <h1>Phone Checker</h1>
            <p>leave your email to got one-time free gsx check</p>
            <input
                type="text"
                className="inputDemo"
                value={inputValue}
                onChange={e => {
                    setInputValue(e.target.value);
                }}
            />
            <button onClick={async () => {
                console.log(inputValue);
                //将inputValue转化为字符串
                let temp = inputValue.toString();
                let url = 'https://api.checkerphone.com:3000/api/phone/check?inputValue=' + temp;
                //使用axios访问后端接口（http://localhost:3000/api/phone/check），上传inputValue
                try {
                    const response = await axios.get(url);
                    // 处理响应数据
                    console.log(response.data);
                } catch (error) {
                    // 处理错误
                    console.error(error);
                }
            }}>Submit
            </button>
        </div>
    )
}

export default Home;