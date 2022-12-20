import { Form, message } from 'antd'
import Input from 'antd/lib/input/Input'
import React ,{useEffect, useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../resources/authentication.css'
import axios from 'axios'
import Spinner from '../components/Spinner'

function Register() {
    const navigate=useNavigate(true);
    const [loading,setLoading]=useState(false);

    const onFinish=async(values)=>{
       try {
        setLoading(true);
        await axios.post('/api/users/register',values)
        message.success('Registered successful')
        setLoading(false);
       } catch (error) {
        message.error('Oops! something went wrong')
        setLoading(false);
       }
    }
    useEffect(()=>{
        if(localStorage.getItem('domestic-expenditure-auditing')){
          navigate("/");
        }
      },[]);
    return (
        <div className='register'>
                        {loading && <Spinner/>}

            <div className='row justify-content-center align-items-center w-100 h-100'>

                <div className='col-md-5'>
                    <div className='lottie'>
                    <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_ocib98vu.json" background="transparent" speed="1" loop autoplay>

                    </lottie-player>
                    </div>
                </div>
                <div className='col-md-5'>
                    <Form layout='vertical' onFinish={onFinish}>
                       <h1>DOMESTIC EXPENSE AUDITING / REGISTER</h1>
                       <hr/>
                        <Form.Item label='Name' name='name'>

                            <Input />
                        </Form.Item>


                        <Form.Item label='Email' name='email'>

                            <Input />
                        </Form.Item>


                        <Form.Item label='Password' name='password'>

                            <Input type='password' />
                        </Form.Item>

                        <div className="d-flex justify-content-between align-items-center">
                            <Link to='/login'>Already register , click here to Login </Link>
                            <button className='primary' type='submit'>REGISTER</button>
                        </div>
                    </Form>

                </div>
            </div>
        </div>
    )
}

export default Register