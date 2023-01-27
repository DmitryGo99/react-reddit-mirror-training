import React from 'react';
import styled, { keyframes} from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const AnimateGrow = keyframes`
0% {
	transform: scale3d(1, 1, 1);
}
50% {
	transform: scale3d(1.03, 1.03, 1.03);
}
100% {
	transform: scale3d(1, 1, 1);
}
`

const SAuthorization = styled.div`
padding: 50px 50px 100px 50px;
font-weight: 400;
font-size: 28px;
line-height: 33px;
text-align: center;
color: #666666;
animation: ${AnimateGrow} 2s infinite;
`

export function PrescriptionToAuth(props: Props) {
	return (
		<SAuthorization {...props}>
			Для просмотра списка постов выполните вход в учетную
			запись
		</SAuthorization>
	);
}
