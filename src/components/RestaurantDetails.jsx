const RestaurantDetails = ({ restaurent }) => {
	return (
		<div className='restaurent'>
			<div className='left'>
				<img src={restaurent.image} alt='' />
			</div>
			<div className='right'>
				<h2>{restaurent.name}</h2>
				<p>{restaurent.categories.join(',')}</p>
				<p>
					<strong>Review:</strong> {restaurent.review}
				</p>
				<p>
					<strong>Votes:</strong> {restaurent.votes}
				</p>
				<p>
					Cost ₹<strong>{restaurent.itemCost}</strong> per item
				</p>
				<p>
					<strong>Payment methods accepted:</strong>
					{Object.keys(restaurent.paymentMethods)
						.filter(ele => restaurent.paymentMethods[ele] === true)
						.join(',')}
				</p>
			</div>
		</div>
	);
};

export default RestaurantDetails;
