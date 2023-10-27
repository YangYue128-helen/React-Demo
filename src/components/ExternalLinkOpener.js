import React from 'react';
import Button from '@mui/material/Button';

class ExternalLinkOpener extends React.Component {
  constructor(props) {
    super(props);

    this.openExternalLink = this.openExternalLink.bind(this);
  }

  openExternalLink(url) {
    console.log(url);
    const externalLink = url; 
    window.open(externalLink, '_blank');
  }

  render() {
    const {content, url} = this.props;
    return (
        <Button variant="outlined" size="large" onClick={this.openExternalLink(url)}>{content}</Button>
    );
  }
}

export default ExternalLinkOpener;

