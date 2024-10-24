
import './Content.css'
import LawyerCareerVideo from '../assets/Lawyer Career Video.mp4'
import { Button } from '@mui/material'
import { SiChatbot } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

function Content() {
  const navigateTo = useNavigate();
  const Lawyer = () =>{
    navigateTo("/lawyer")
  }
  return (
    <div>
      <div className="main">
        <div className="content">
          <div className="content__left">
          <video autoPlay muted loop src={LawyerCareerVideo}/>
          </div>
          <div className="content__right">
          <h1>Empowering Justice, Upholding Rights: Your Trusted Legal Partner</h1>
          <Button variant='outlined' onClick={Lawyer}>Get Legal Advice </Button>
          <a href="https://mediafiles.botpress.cloud/9e91f4a3-cac3-4288-a4fc-c5e7392239cd/webchat/bot.html"><SiChatbot/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content