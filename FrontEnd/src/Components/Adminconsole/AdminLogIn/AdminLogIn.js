import React from 'react'
import { Button, Divider, Form, Segment, Grid, Icon, Modal, Header } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { Message } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import adminpg from '../adminpg.jpeg'; 
import './adminLogIn.css';
import NavBar from '../../NavSlider/NavBar'
import Footer from '../../Footer/Footer'
import Copyright from '../../Copyright/Copyright'
import { Popup } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogIn = () => {

  const navigate = useNavigate();

  const [forgotPassword, setForgotPassword] = useState(false);
  const [open, setOpen] = React.useState(false)
  const [Uid, setUId] = useState('');
  const [Pass, setPass] = useState(''); 

  const [mobile,setMobile]= useState('');
  const [email,setEmail]= useState('');

  const [id, setId] = useState();
  const [userPass, setUserpass] = useState();
  const [show, setShow] = useState('');

  
  const handlepassword= () => {
    if (!id || !userPass) {
      setShow('Please enter both ID and Password');
      return;
    }

    let userinfo = JSON.parse(localStorage.getItem(id));
    if (userPass === userinfo.Pass ) {
      setShow('Strong Password');
      sessionStorage.setItem("temp", id);
      navigate('/Adminconsole');
    } else {
      setShow('Please enter valid password');
    }
  };

  const Adduser = () => {
    
    let userinfo = {
      Uid: Uid, Pass: Pass, mobile:mobile, email:email
    };
    userinfo = JSON.stringify(userinfo);
    localStorage.setItem(Uid, userinfo);

    setOpen(false);
  }
  

  return (
    

<div className='AdminLogInmain'>
  <NavBar/>
  <div className="login" >
      <Segment placeholder textAlign='left' 
       className={`log ${forgotPassword ? 'blur-background' : ''}`}
      >
        <Grid columns={2} relaxed='very' stackable>

          <Grid.Column id="body">
            <img src="./about.png" id="B"/>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
          {show && (
              <Message color={show === 'Strong Password' ? 'green' : 'red'}>
                {show}
              </Message>
            )}
            <Form>
              {forgotPassword ? (
                <div className='highlight-form'>
              <Form.Field>
              <label>Old Password</label>
              <input placeholder='Old Password' />
            </Form.Field>
            <Form.Field>
              <label>New Password</label>
              <input placeholder='New Password' />
            </Form.Field>
            <Form.Field>
              <label>Confirm Password</label>
              <input placeholder='Confirm Password' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
            </div>
              ):
             ( <>
             <Form.Input
                icon='user'
                iconPosition='left'
                label='Username'
                placeholder='Username'
                onChange={(e) => setId(e.target.value)}
              />
              
                      <Popup
        trigger={  <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            placeholder='Password'
            onChange={(e) => setUserpass(e.target.value)}
          />}
        content='Please enter a valid Password'
        on='focus'
      />
            
              </>
             )}
              <Button content='Login' onClick={handlepassword} primary  />
              <a href='#' onClick={() => setForgotPassword(true)}>
        Forget Password
      </a>
                </Form>
            <Divider horizontal>Or</Divider>
            <Modal
              closeIcon
              open={open}
               trigger={<Button color='teal' content='Become a Member' icon='add' labelPosition='left' />}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)} 
              style={{height:'360px',margin:'160px 200px',background:'green'}}
            >
<Modal.Content>
             
                <label> User Id</label><br />
                <Input placeholder='UserId' type="text" onChange={(e) => setUId(e.target.value)} /><br/>
                <label> MobileNo.</label><br />
                <Input placeholder='MobileNo.' type="text" onChange={(e) => setMobile(e.target.value)} /><br/>
                <label> Email</label><br />
                <Input placeholder='Email' type="email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                <label> Password</label><br />
                <Popup
        trigger={<Input placeholder='Password' type="password" onChange={(e) => setPass(e.target.value)} />}
        header='Strong Password :'
        content='Use at least 8 characters.Include a mix of uppercase and lowercase letters.Add numbers."Like this kumar7K"'
        on='focus'
      />
              </Modal.Content>      
              <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                  <Icon name='remove' /> Cancel
                </Button>
                <Button color='green' onClick={Adduser} >
                  <Icon name='checkmark' /> Submit
                </Button>
              </Modal.Actions>
            </Modal>    
            <div id='icon'>
            <Icon name='facebook' size='large' />
            <Icon name='twitter' size='large' />
           <Icon name='instagram' size='large' />
           <Icon name='call' size='large' />
           </div>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
    

    <br/> <br/> <br/> <br/><br/>
    <Footer/>
    <Copyright/>
    
    </div>   
  )
}

export default AdminLogIn;
