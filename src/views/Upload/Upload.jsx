
import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

  }

  handleUploadImage=(ev)=> {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <TextField ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" 
          name="question"
          id="outlined-multiline-static"
          label="enter the desired name of the file"
          style={{ width: "50%", marginLeft: "1rem"  }}
          margin="normal"
          variant="standard"
          />
        </div>
        <br />
        <div>
          <Button color="info">Upload</Button>
        </div>
        
      </form>
    );
  }
}

export default Main;