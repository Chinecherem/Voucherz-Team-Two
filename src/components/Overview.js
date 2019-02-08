import React from 'react';
import HCard from './HCard';

class Overview extends React.Component {

  render() {
    return (
      <section className='overview'>
        <div className='row'>
          <div className='col-sm-3'>
            <HCard iconName='users' backgroundColor='tealBG' label='Vouchers' number={0} />
          </div>
          <div className='col-sm-3'>
            <HCard iconName='tags' backgroundColor='pinkBG' label='Redemption' number={0} />
          </div>
          <div className='col-sm-3'>
            <HCard iconName='shopping-cart' backgroundColor='amberBG' label='revenue' number={0} prefix='$' />
          </div>
          <div className='col-sm-3 '>
            <HCard iconName='bar-chart' backgroundColor='cyanBG' label='goal' number={85} suffix='%' />
          </div>
        </div>
      </section>
    )
  }
}

export default Overview;