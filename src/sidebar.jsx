import { React } from 'react' 
import { useNavigate } from 'react-router-dom';

function Sidebar() {

    const navigate = useNavigate();

    return (
        <div>
            <div className='tit-card'> 
                    <div className='d-flex align-items-center'>
                        <i class="bi bi-plus-lg mx-5"></i>
                        <img className='logo-text' src="src\assets\Instagram_logo.svg.png" alt="" />
                        <i class="bi bi-heart mx-5"></i> 
                    </div> 
            </div>
            <div className="m-3 side-nav position-fixed">
                <div className='d-flex flex-column gap-2'>
                    <img className='logo-text' src="src\assets\Instagram_logo.svg.png" alt="" />
                    <div className='homes'><i class="bi bi-house-door"></i>Home</div>
                    <div className='homes'><i class="bi bi-search"></i>Search</div>
                    <div className='homes'><i class="bi bi-compass"></i>Explore</div>
                    <div className='homes'><i class="bi bi-play-btn"></i>Reels</div>
                    <div className='homes'><i class="bi bi-send"></i>Messages</div>
                    <div className='homes'><i class="bi bi-heart"></i>Notifications</div>
                    <div className='homes'><i class="bi bi-plus-lg"></i>Create</div>
                    <div onClick={() => { navigate('/profile') }} className='homes'><i class="bi bi-person-circle"></i>Profile</div>
                </div>
                <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
                    <div><i class="bi bi-threads"></i>Threads</div>
                    <div><i class="bi bi-list"></i>More</div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar