import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './ProfileList.css'
import {
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core'

import { apiKey } from '../../../../APIKEYS'
import CircularStatic from '../../../commons/CircularProgressWithLabel'
import { displayAll } from '../../../../Phase/displayAll'

function ProfileList({ account, contractData, setSelectedProfile }) {
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [profiles, setProfiles] = useState([
    {
      image:
        'https://asynchronous-art-inc-res.cloudinary.com/image/upload/w_400,f_auto,c_thumb/v1665114164/0xe688fdccaf7b5b590d5a693876ebae66bd6401e4/633f34d0882b56e2b4c92f6d/blueprintCover/Copia_de_D_Banner_horizontal_1920_1080_px_svpbca.png',
      className: 'Introduction to Programming',
      professorName: 'Joe Boulet',
      rating: '72',
    },
    {
      image:
        'https://asynchronous-art-inc-res.cloudinary.com/image/upload/w_400,f_auto,c_thumb/v1665037001/0xd9393c16f1aaf829a4e2358d44ed939514c0c3cd/633c8e696089f1d077c1b97d/blueprintCover/scarelords_title_xulpm7.png',
      className: 'Solidity Smart Contracts',
      professorName: 'Joe Boulet',
      rating: '72',
    },
    {
      image:
        'https://asynchronous-art-inc-res.cloudinary.com/image/upload/w_400,f_auto,c_thumb/v1645603121/blueprints/61fb3e9ccf78577707f0e686.png',
      className: 'Introduction Worldcoin',
      professorName: 'Joe Boulet',
      rating: '72',
    },
    {
      image:
        'https://asynchronous-art-inc-res.cloudinary.com/image/upload/w_400,f_auto,c_thumb/v1665037001/0xd9393c16f1aaf829a4e2358d44ed939514c0c3cd/633c8e696089f1d077c1b97d/blueprintCover/scarelords_title_xulpm7.png',
      className: 'Solidity Smart Contracts',
      professorName: 'Joe Boulet',
      rating: '72',
    },
    {
      image:
        'https://asynchronous-art-inc-res.cloudinary.com/image/upload/w_400,f_auto,c_thumb/v1645603121/blueprints/61fb3e9ccf78577707f0e686.png',
      className: 'Introduction Worldcoin',
      professorName: 'Joe Boulet',
      rating: '72',
    },
    {
      image:
        'https://asynchronous-art-inc-res.cloudinary.com/image/upload/w_400,f_auto,c_thumb/v1665037001/0xd9393c16f1aaf829a4e2358d44ed939514c0c3cd/633c8e696089f1d077c1b97d/blueprintCover/scarelords_title_xulpm7.png',
      className: 'Solidity Smart Contracts',
      professorName: 'Joe Boulet',
      rating: '72',
    },
    {
      image:
        'https://asynchronous-art-inc-res.cloudinary.com/image/upload/w_400,f_auto,c_thumb/v1645603121/blueprints/61fb3e9ccf78577707f0e686.png',
      className: 'Introduction Worldcoin',
      professorName: 'Joe Boulet',
      rating: '72',
    },
    {
      image:
        'https://asynchronous-art-inc-res.cloudinary.com/image/upload/w_400,f_auto,c_thumb/v1665037001/0xd9393c16f1aaf829a4e2358d44ed939514c0c3cd/633c8e696089f1d077c1b97d/blueprintCover/scarelords_title_xulpm7.png',
      className: 'Solidity Smart Contracts',
      professorName: 'Joe Boulet',
      rating: '72',
    },
    {
      image:
        'https://asynchronous-art-inc-res.cloudinary.com/image/upload/w_400,f_auto,c_thumb/v1645603121/blueprints/61fb3e9ccf78577707f0e686.png',
      className: 'Introduction Worldcoin',
      professorName: 'Joe Boulet',
      rating: '72',
    },
    {
      image:
        'https://asynchronous-art-inc-res.cloudinary.com/image/upload/w_400,f_auto,c_thumb/v1665037001/0xd9393c16f1aaf829a4e2358d44ed939514c0c3cd/633c8e696089f1d077c1b97d/blueprintCover/scarelords_title_xulpm7.png',
      className: 'Solidity Smart Contracts',
      professorName: 'Joe Boulet',
      rating: '72',
    },
    {
      image:
        'https://asynchronous-art-inc-res.cloudinary.com/image/upload/w_400,f_auto,c_thumb/v1645603121/blueprints/61fb3e9ccf78577707f0e686.png',
      className: 'Introduction Worldcoin',
      professorName: 'Joe Boulet',
      rating: '72',
    },
    {
      image:
        'https://asynchronous-art-inc-res.cloudinary.com/image/upload/w_400,f_auto,c_thumb/v1665037001/0xd9393c16f1aaf829a4e2358d44ed939514c0c3cd/633c8e696089f1d077c1b97d/blueprintCover/scarelords_title_xulpm7.png',
      className: 'Solidity Smart Contracts',
      professorName: 'Joe Boulet',
      rating: '72',
    },
    {
      image:
        'https://asynchronous-art-inc-res.cloudinary.com/image/upload/w_400,f_auto,c_thumb/v1645603121/blueprints/61fb3e9ccf78577707f0e686.png',
      className: 'Introduction Worldcoin',
      professorName: 'Joe Boulet',
      rating: '72',
    },
  ])
  console.log(
    '🚀 ~ file: ProfileList.js ~ line 44 ~ ProfileList ~ profiles',
    profiles,
  )

  useEffect(() => {
    // const loaddata = async () => {
    //   try {
    //     setLoading(true)
    //     const getAllProfiles = await displayAll()
    //     console.log(getAllProfiles)
    //     setProfiles([])
    //     // setProfiles(getAllProfiles)
    //     setLoading(false)
    //   } catch (error) {
    //     console.log(error)
    //     setLoading(false)
    //   }
    // }
    // loaddata()
  }, [])

  const details = (profile) => {
    console.log('here profile', profile.address)
    localStorage.removeItem('selectedProfile')
    localStorage.setItem('selectedProfile', profile)
    setSelectedProfile(profile)
    history.push(`/profile/details/${profile.address}`)
  }

  return (
    <div style={{ minHeight: '60vh', borderRadius: '24px' }}>
      {loading ? (
        <CircularStatic />
      ) : (
        <div>
          <Grid container spacing={40} style={{ marginLeft: '2.9rem' }}>
            {profiles.length ? (
              profiles.map((profile, index) => (
                <Grid item spacing={1} className="swap-card">
                  <Card
                    sx={{ maxWidth: 400 }}
                    style={{ width: '400px', borderRadius: '15px' }}
                    onClick={() => details(profile)}
                  >
                    <CardMedia
                      component="img"
                      height="225"
                      image={profile.image}
                      alt="Profile"
                    />
                    <CardContent style={{ paddingBottom: '10px' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          paddingBottom: '5px',
                        }}
                      >
                        <p className="gallery-name"> {profile.className}</p>
                        <p className="gallery-rating">
                          Ratings {profile.rating}
                        </p>
                      </div>

                      <p className="gallery-professor">
                        {profile.professorName}
                      </p>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <h2>No Profiles Yet...</h2>
            )}
          </Grid>
        </div>
      )}
    </div>
  )
}

export default ProfileList
