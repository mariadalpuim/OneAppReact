import {useState} from 'react'

function Week10_03_CustomHooks(curState = false) {
    const [state, setState] = useState(curState)

    const toggle = () => {
        setState(!state)
    }

    return [state, toggle]
}

export default Week10_03_CustomHooks