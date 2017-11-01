/**
 * @file BrowserInfoDashBoard.tsx
 * Access device files using browser File API
 *
 * PWA Features
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for
 * Original Software: robert.a.kayl.civ@mail.mil
 */
import * as React from 'react';
import FileItem from './FileItem';

// Icons
import File from 'material-ui/svg-icons/file/folder';

export interface Props {

}

export interface State {
  length: number;
}

let fileArray = [];

export default class FileAccess extends React.Component<Props, State> {

  // TODO: use File API
  constructor(props) {
    super(props);

    this.state = {
      length: 0
    };

    this.handleFiles = this.handleFiles.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    fileArray = [];
    this.handleFiles(event.target.files);
  }

  handleFiles(files) {
    const that = this;

    for (var i = 0; i < files.length; ++i) {
      var file = files[i];

      fileArray.push(
          <FileItem
            key={file.name + '-' + file.size}
            name={file.name}
            type={file.type}
            size={file.size}
            lastModifiedDate={file.lastModifiedDate.toTimeString()}
          />
      );
    }

    that.setState({
      length: files.length,
    });
  }

  /* Use <input> to access files */
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <File style={{ textAlign: 'center' }} />
        <br />
        <input type="file" onChange={this.handleChange} multiple />
        <br /><br />
        {
          this.state.length > 0 &&
          <div className="files">
            Files selected: {this.state.length}
          </div>
        }
        <br />
        {
          fileArray.length > 0 &&
          <div>
            <ul>
            {
              fileArray.map((file) => {
                return(file)
              })
            }
            </ul>
          </div>
        }
      </div>
    );
  }
}
