import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import {
  getAllActivitiesForUser
} from '../actions/actions-portfolio.js';
import ActivityCard from './ActivityCard';
import '../App.css';
import ReactGA from "react-ga"

const PortfolioLog = ({activities, getAllActivitiesForUser}) => {
  // const { id } = useParams;

      useEffect( _ => {
        ReactGA.pageview("/portfolio")
      },[])

      useEffect(() => {
        //the paramter passed in will not be hard coded once we make user login and dynamic routes
        getAllActivitiesForUser(3)       
      }, [getAllActivitiesForUser]);

    return(
        <div className='portfolio-list'>
          {activities.map(activity =>(<ActivityCard key={activity.id} activity={activity} className='card' />))}
        </div>
    )
};

const mapStateToProps = (state) => {
  return {
    activities: state.portfolioReducer.activities,
    isLoading: state.portfolioReducer.isLoading,
    error: state.portfolioReducer.error,
  };
};

export default connect(mapStateToProps , { getAllActivitiesForUser })(PortfolioLog);