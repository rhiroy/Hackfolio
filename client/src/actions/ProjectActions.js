/* eslint-disable no-console */
import axios from 'axios';
import { getProfile } from './ProfileActions';

export const saveProject = project => {
  return dispatch => {
    return axios
      .post('/api/project', project)
      .then(res => {
        dispatch(getProfile(res.headers.username));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const changeProjects = projects => {
  return dispatch => {
    return axios
      .put('/api/project', projects)
      .then(res => {
        dispatch(getProfile(res.headers.username));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const deleteProject = id => {
  return dispatch => {
    return axios
      .delete(`/api/project/${id}`)
      .then(res => {
        dispatch(getProfile(res.headers.username));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
