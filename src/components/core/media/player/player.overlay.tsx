import * as React from 'react'
import {Box, Fade, styled, Typography} from '@mui/material'
import {ReactPlayerProps} from 'react-player'
import {isNotNull} from "@d-lab/common-kit"

const StyledPlayerOverlay = styled('div')<ReactPlayerProps>`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: end;
  left: 0;
  top: 0;
  bottom: ${({state}) => (state.light ? '0' : '94px')};
  background-color: ${({state}) => (state.light || state.playing ? 'transparent' : 'rgba(0, 0, 0, 0.4)')};
  opacity: ${({state}) => (state.playing ? '0' : '1')};
  transition: opacity 0.2s ease-in-out;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  .video-player__overlay-inner {
    padding-left: ${({state}) => (state.light ? '50px' : '25px')};
    padding-bottom: ${({state}) => (state.light ? '50px' : '38px')};
    width: ${({state}) => (state.light ? 'auto' : '100%')};
  }
;
`

export interface PlayerOverlayProps {
    state: ReactPlayerProps
    title?: string
}

export default function PlayerOverlay(props: PlayerOverlayProps) {
    const {state, title} = props

    return (
        <StyledPlayerOverlay state={state}>
            {isNotNull(title) && <Box className={'video-player__overlay-inner'}>
                <Fade in>
                    <Typography variant="h5" color={'white'} mt={10}>
                        {title}
                    </Typography>
                </Fade>
            </Box>}
        </StyledPlayerOverlay>
    )
}