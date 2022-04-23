import ScrollAnimation from 'react-animate-on-scroll';
import bg from '../images/15.png'
import phone from '../images/14.png'
import qrCode from '../images/16.png'

function Info() {
	return ( 
		<div style={{height:'100vh', width:'100vw'}}>
			<div className='position-relative' style={{height:'100%'}}>
				<div
					style={{
						height:'100%',
						width:'100%',
						// background:`url(${bg})`,
						backgroundPosition:'center',
						backgroundRepeat:'no-repeat',
						backgroundSize:'cover',
					}}
				/>

				<div className='position-absolute' style={{
					top:'0px',
					height:'100%',
					width:'100%',
				}}>
					<div className='row d-flex justify-content-center align-items-center' style={{height:'100%', }}>
						<div className='col-md-3 col-6 d-flex align-items-center justify-content-center'>
							<ScrollAnimation animateIn='fadeInLeft'>
								<img src={phone} alt='brunchescafe app' style={{
									width:'100%',
									height:'auto',
									// margin:'0% 25%'
								}}/>
							</ScrollAnimation>
						</div>
						<div className='col-md-4 col-6 d-flex align-items-center text-center'>
							<div className='row d-flex justify-content-center'>
								<div className='col-12'>
									<ScrollAnimation animateIn='fadeIn'>
										<div style={{fontSize:'5vw', fontWeight:'bold'}}>Use Our App</div>
									</ScrollAnimation>
								</div>
								<div className='col-md-10 col-12 d-flex justify-content-center'>
									<ScrollAnimation animateIn='bounceIn'>
										<img src={qrCode} alt='brunchescafe app download qrcode' style={{
											width:'100%',
											height:'auto',
										}}/>
									</ScrollAnimation>
								</div>
								<div className='col-12' >
									<ScrollAnimation animateIn='fadeIn'>
										<div style={{fontSize:'5vw', fontWeight:'bold'}}>Get Free Rewards</div>
									</ScrollAnimation>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
}

export default Info;