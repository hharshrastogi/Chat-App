import React from 'react'

const GenderCheckbox = () => {
    return (
        		<div className='flex'>
        			<div className='form-control'>
        				<label className={`label gap-2 cursor-pointer`}>
        					<span className='label-text text-blue-500 font-bold'>Male</span>
        					<input type='checkbox' className='checkbox border-slate-900' />
        				</label>
        			</div>
        			<div className='form-control'>
        				<label className={`label gap-2 cursor-pointer`}>
        					<span className='label-text text-blue-500 font-bold'>Female</span>
        					<input type='checkbox' className='checkbox border-slate-900' />
        				</label>
        			</div>
        		</div>
        	);
        };
        export default GenderCheckbox;