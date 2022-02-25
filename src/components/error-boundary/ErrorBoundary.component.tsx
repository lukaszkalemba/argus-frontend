import { Component, ErrorInfo } from 'react';
import { FormattedMessage } from 'react-intl';
import { IErrorBoundaryProps, IErrorBoundaryState } from './ErrorBoundary.types';

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);

    this.state = {
      hasErrors: false,
    };
  }

  public static getDerivedStateFromError() {
    return { hasErrors: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { hasErrors } = this.state;
    const { children } = this.props;

    if (hasErrors) {
      return (
        <h1>
          <FormattedMessage id="common:somethingWrong" />
        </h1>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
