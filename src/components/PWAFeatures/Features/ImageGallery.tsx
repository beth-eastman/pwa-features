/**
 * @file ImageGallery.tsx
 * Displays a list of images.
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
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

// Icons
import DownloadIcon from 'material-ui/svg-icons/file/file-download';

export interface Props {
  images: any;
}

export interface State {

}

export default class ImageGallery extends React.Component<Props, State> {

  responsiveColumns = () => {
    // const width = this.props.appPage.screen.width;
    // if (!width) {
    //   return 1;
    // }
    // if (width > 1200) {
    //   return 4;
    // }
    // if (width > 900) {
    //   return 3;
    // }
    // if (width > 600) {
    //   return 2;
    // }
    return 2;
  }

  render() {

    return (
      <div>
        <h2>Image Gallery</h2>
        <GridList style={{width: '100%'}} cols={this.responsiveColumns()}>
          {this.props.images.map((image, key) => {
            return(
              <GridTile
                key={key}
                title={'download image'}
                actionIcon={
                  <a href={image} download={"image-" + key + ".png"}>
                    <IconButton><DownloadIcon color="white" /></IconButton>
                  </a>
                }
              >
                <img src={image} alt="photo from device" key={key} />
              </GridTile>
            )
          })}
        </GridList>
      </div>
    );
  }
};
