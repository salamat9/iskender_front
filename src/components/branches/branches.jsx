import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BranchItem from './branchesItem';

const Branches = () => {
  const branches = useSelector((state) => state.branches.data);
  const {
    branches: { getBranches },
  } = useDispatch();

  useEffect(() => {
    getBranches();
  }, []);

  return (
    <div>
      <div className='products-title'>
        <h2>Адреса магазинов</h2>
        <div className='categories-title_right'>все</div>
      </div>
      <div className='branches-container'>
        {branches.map((branch) => (
          <BranchItem key={branch._id} branch={branch} />
        ))}
      </div>
    </div>
  );
};

export default Branches;
