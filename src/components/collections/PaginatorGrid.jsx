const PaginatorGrid = ({ next, prev, paginate }) => {
	return (
		<div className="cs-main-pagination col-lg-4 col-md-6 col-sm-6">
			<span>There are more products</span>
			<ul style={{ padding: 0 }}>
				{next && (
					<li>
						<span
							style={{ cursor: "pointer" }}
							onClick={() => paginate(next)}
						>
							Next page
						</span>
					</li>
				)}
				{prev && (
					<li>
						<span
							style={{ cursor: "pointer" }}
							onClick={() => paginate(prev)}
						>
							Previous page
						</span>
					</li>
				)}
			</ul>
		</div>
	);
};

export default PaginatorGrid;
