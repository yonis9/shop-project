import React , { Component } from 'react';

import BrokenPage from '../BrokenPage/BrokenPage';

class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }


    render() {
        if (this.state.hasError) {
            return <BrokenPage />
        }

        return this.props.children
    }
}

export default ErrorBoundary;