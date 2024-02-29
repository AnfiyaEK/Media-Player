import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


function LandingPage() {

  const navigate = useNavigate()

  const handleNavigate = ()=>
  {
    // navigate to home page
    navigate('/home')
  }

  return (
    <>
    <div className='container'>
      <div className="header row align-items-center m-5">
        <div className="col-lg-5">
          <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
          <p className='mt-3' style={{textAlign:'justify'}}>Media Player App. Will allow you to add and remove their uploaded videos, 
          also helps to arrange them in different categories by providing drag and drop functionalities.</p>
          <button onClick={handleNavigate} className='btn btn-info mt-3'>Get Started</button>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="Landing Image" />
        </div>
      </div>
      <div className="features">
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">

          <div className="col-lg-4">
          <Card>
            <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5f904f0edc89546c89757b2b/1607054396851-09KAYVNX7ZH3KR6HIYFF/Culture+of+Change+.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                User can update video, add video, and delete video
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          
          <div className="col-lg-4">
          <Card>
            <Card.Img variant="top" height={"240px"} src="https://i.pinimg.com/originals/18/a0/a3/18a0a33c874e26a55fe2456347567ae9.gif" />
            <Card.Body>
              <Card.Title>Categorize Video</Card.Title>
              <Card.Text>
                User can categorize according to prefernce using drag and drop features
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

          <div className="col-lg-4">
          <Card>
            <Card.Img variant="top" height={"240px"} src="https://cdn.dribbble.com/users/1242979/screenshots/7099165/media/e521bd143bf1e795af3ec725a68e273f.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                User are able to see the history of watched videos
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

        </div>
      </div>
      <div className="row video border p-5 mt-5 rounded mb-5 align-items-center">
        <div className="col-lg-5">
          <p style={{textAlign:'justify'}}> <span className='fs-4'>Play Everything : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil placeat quo perferendis quae similique ratione consequuntur pariatur? 
          Amet ullam quibusdam repellat voluptate at aut libero dolorem reprehenderit eligendi, dolore aperiam. 
          </p>

          <p style={{textAlign:'justify'}}> <span className='fs-4'>Categorize Videos : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus animi, 
          hic consectetur ipsum porro dolorem numquam qui sint deleniti eveniet necessitatibus aliquid placeat quidem molestias provident illum atque soluta nisi. 
          </p>

          <p style={{textAlign:'justify'}}> <span className='fs-4'>Watch History : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel atque aliquam, fugit sapiente dignissimos delectus,
           unde cum veritatis dolore molestiae culpa ad exercitationem facere qui vitae quia consectetur! Cupiditate, et?
          </p>
        </div>
        <div className="col-lg-6">
        <iframe width="688" height="387" src="https://www.youtube.com/embed/ZdMZ40GSVmc" title="Leo - Badass Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>          
        </iframe>
        </div>

      </div>
    </div>
    <hr />
    </>
  )
}

export default LandingPage