import { Image } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import Divider from '@mui/material/Divider'
import { useState } from 'react';


import bg from '../images/12.jpg'
import pg1 from '../images/menuPg1.png'
import pg2 from '../images/menuPg2.png'


function Menu() {

	const [visible, setVisible] = useState(false)

	return ( 
		<div id='menu'>
			<div className='row'
				style={{
					// height:'100vh',
					paddingTop:'5%',
					background:`url('${bg}')`,
					backgroundSize:'cover',
					backgroundRepeat:'no-repeat',
					display:'flex',
					justifyContent:'center'
				}}
			>
				<div className='col-md-12 col-lg-5' style={{height:'100%', textAlign:'center'}}>
					<ScrollAnimation
						animateIn='fadeInLeft'
					>
						<Image 
							src={pg1}
							height={550}
							preview={{ visible: false }}
							onClick={() => setVisible(true)}
						/>
						<div style={{ display: 'none' }}>
						<Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
						<Image src={pg1} />
						<Image src={pg2} />
						</Image.PreviewGroup>
					</div>
					</ScrollAnimation>
				</div>
				
					{/* <Divider orientation="vertical" flexItem /> */}
				
				<div className='col-md-12 col-lg-5' style={{height:'100%', textAlign:'center'}}>
					<ScrollAnimation
						animateIn='fadeInRight'
					>
						<Image 
							src={pg2}
							height={550}
						/>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
}

export default Menu;