import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


class OpeniiotCard extends Component {
  constructor(props) {
    super(props);
    this.openExternalLink = this.openExternalLink.bind(this);
  }
  render() {
    const {content} = this.props;
    return (
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Openiiot Project
          </Typography>
          <Typography variant="h5" component="div">
            Component{bull}{content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="large" onClick={this.openExternalLink}>{content}</Button>
        </CardActions>
      </Card>
    );
  };

  openExternalLink() {
    const {url} = this.props;
    console.log(url);
    window.open(url, '_blank');
  }

}

export default OpeniiotCard;