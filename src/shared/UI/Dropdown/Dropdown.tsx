import React, {useRef} from 'react';
import {DropdownBtn} from "../../CardsList/Card/TopBlock/InfoBlock/DropdownBtn";
import {BlockDropdown} from "../../CardsList/Card/BlockDropdown";
import styled from 'styled-components'


type Props = {
  children?: React.ReactNode
}

const SContainer = styled.div`
min-width: 103px;
height: 40%;
position: absolute;
right: 0;
top: 0;
@media ${props => props.theme.media.tablet}{
	width: 12%;
  height: 40%;
}
`

const SListCont = styled.div`
	width: 100%;
  height: 100%;
  left: 0;
  position: absolute;	
`

const SList = styled.div`
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
z-index: 3;	
`

export function Dropdown(props: Props) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
	const node = document.querySelector('#dropdown_root')
	if (!node) return null
	const ref = useRef<HTMLDivElement>(null);

	let positionDropdownTop: any = ref.current?.getBoundingClientRect().top
	let positionDropdownLeft: any = ref.current?.getBoundingClientRect().left
	let windowWidth = window.innerWidth
	let blockDropdownPositionTop;
	let blockDropdownPositionLeft;

	if (windowWidth >= 1200) {
		blockDropdownPositionTop = positionDropdownTop + window.scrollY + 100;
		blockDropdownPositionLeft = positionDropdownLeft + window.scrollX;
	}

	if (windowWidth >= 1024 && windowWidth < 1200) {
		blockDropdownPositionTop = positionDropdownTop + window.scrollY + 100;
		blockDropdownPositionLeft = positionDropdownLeft + window.scrollX - 50;
	}

	if (windowWidth < 1024) {
		blockDropdownPositionTop = positionDropdownTop + window.scrollY + 45;
		blockDropdownPositionLeft = positionDropdownLeft + window.scrollX - 62;
	}

	return (
		<SContainer {...props}>
			<div ref={ref} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
				<DropdownBtn iaAt={isDropdownOpen}/>
			</div>
			{isDropdownOpen && (
				<SListCont {...props}>
					<SList {...props} onClick={() => setIsDropdownOpen(false)}>
						<BlockDropdown positionTop={blockDropdownPositionTop}
									   positionRight={blockDropdownPositionLeft}/>
					</SList>
				</SListCont>
			)}
		</SContainer>
	);
}
