import React from "react";
import {AnonIcon, CommentIcon} from "../icons";
import {HideIcon} from "../icons";
import {MenuIcons} from "../icons";
import {ReportIcon} from "../icons";
import {SaveIcon} from "../icons";
import {ShareIcon} from "../icons";


type TName = 'CommentIcon' | 'HideIcon' | 'MenuIcons' | 'ReportIcon' | 'SaveIcon' | 'ShareIcon'| 'AnonIcon';

interface IIconProps {
   name: TName;
   size?: number;
}



export function Icon({name, size}: IIconProps) {
	if (name === 'CommentIcon') {
		return (
			<CommentIcon props={size}/>
		);
	} else if (name === 'HideIcon') {
		return (
			<HideIcon props={size}/>
		)
	} else if (name === 'MenuIcons') {
		return (
			<MenuIcons props={size}/>
		)
	} else if (name === 'ReportIcon') {
	   return (
		   <ReportIcon props={size}/>
	   )
	} else if (name === 'SaveIcon') {
		return (
			<SaveIcon props={size}/>
		)
	} else if (name === 'ShareIcon') {
		return (
			<ShareIcon props={size}/>
		)
	} else if (name === 'AnonIcon') {
		return (
			<AnonIcon props={size}/>
		)
	}
	return (
			<div></div>
	)
}

