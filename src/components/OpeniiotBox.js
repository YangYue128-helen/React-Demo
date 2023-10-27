import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import OpeniiotCard from './OpeniiotCard';
import '../style/cardStyle.css';

class OpeniiotBox extends Component {
    constructor (props) {
      super(props);
      this.state = {
        spacing: 2
      }
      this.handleChange = this.handleChange.bind(this);
    }

  render() {
    const contentMap = ["Hardware", "Nodered", "EMQX", "Grafana"]
    const urlMap = ['', "http://47.245.114.166:1880/", "http://47.245.114.166:18083/", "http://47.245.114.166:3000/"]
  
    return (
      <Grid className='centered-container' sx={{ flexGrow: 1, marginTop: 1 }} container spacing={4}>
        <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={this.state.spacing}>
              {[0, 1, 2, 3].map((value) => (
                  <Grid key={value} item>
                  <OpeniiotCard
                      content={contentMap[value]}
                      url={urlMap[value]}
                      sx={{
                        height: 140,
                        width: 100,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                  />
                  </Grid>
              ))}
            </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Grid container>
              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="legend">spacing</FormLabel>
                  <RadioGroup
                    name="spacing"
                    aria-label="spacing"
                    value={Number(this.state.spacing).toString()}
                    onChange={this.handleChange}
                    row
                  >
                    {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                      <FormControlLabel
                        key={value}
                        value={value.toString()}
                        control={<Radio />}
                        label={value.toString()}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }

  handleChange(event) {
    console.log(Number(event.target.value));
    this.setState({ spacing: Number(event.target.value)});
  };
}

OpeniiotBox.defaultProps = {
    spacing: 2
}

export default OpeniiotBox;