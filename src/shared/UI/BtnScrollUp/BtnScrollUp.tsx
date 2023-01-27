import React from 'react';
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const SBtn = styled.button`
	position: absolute;
	right: -20px;
	transition: all .3s ease-in-out;
	&:hover {
		transform: scale(1.1);
	}
`

export function BtnScrollUp(props: Props) {

	return (
		<SBtn {...props}>
			<svg width="50px" height="50px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
				<title>Iconly/Broken/Arrow - Up Circle</title>
				<g id="Iconly/Broken/Arrow---Up-Circle" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g id="Arrow---Up-Circle" transform="translate(12.000500, 12.000000) rotate(-90.000000) translate(-12.000500, -12.000000) translate(2.000500, 2.000000)" fill="#000000" fillRule="nonzero">
						<path d="M10,0 C15.514,0 20,4.486 20,10 C20,15.514 15.514,20 10,20 C4.486,20 2.5243549e-29,15.514 2.5243549e-29,10 C2.5243549e-29,6.872 1.423,3.983 3.902,2.073 C4.22,1.828 4.678,1.888 4.922,2.205 C5.168,2.523 5.107,2.979 4.79,3.226 C2.669,4.857 1.454,7.327 1.454,10 C1.454,14.712 5.287,18.546 10,18.546 C14.712,18.546 18.545,14.712 18.545,10 C18.545,5.288 14.712,1.454 10,1.454 C9.563,1.454 9.126,1.487 8.701,1.552 C8.305,1.612 7.934,1.34 7.873,0.943 C7.807,0.544 8.084,0.175 8.481,0.114 C8.979,0.038 9.49,0 10,0 Z M5.9992,8.0262 C6.2932,7.7342 6.7672,7.7342 7.0592,8.0282 L7.0592,8.0282 L9.9992,10.9812 L12.9392,8.0282 C13.2312,7.7342 13.7062,7.7342 14.0002,8.0262 C14.2932,8.3182 14.2942,8.7932 14.0022,9.0872 L14.0022,9.0872 L10.5302,12.5732 C10.3902,12.7152 10.1992,12.7942 9.9992,12.7942 C9.8002,12.7942 9.6092,12.7152 9.4682,12.5732 L9.4682,12.5732 L5.9972,9.0872 C5.7042,8.7932 5.7052,8.3182 5.9992,8.0262 Z" transform="translate(10.000000, 10.000000) rotate(-90.000000) translate(-10.000000, -10.000000) "></path>
					</g>
				</g>
			</svg>
		</SBtn>
	);
}
