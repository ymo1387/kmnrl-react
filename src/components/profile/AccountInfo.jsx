export default function AccountInfo({ user }) {
	return (
		<div className="col-lg-4 col-12 py-4 px-0 cs-outline">
			<div className="px-4">
				<div className="h4 fw-light mb-4">Account Detail</div>
			</div>
			<div className="px-4">
				{user.name && (
					<div className="my-2">
						<li>{user.name}</li>
					</div>
				)}
				<div className="my-2">
					<li>{user.email}</li>
				</div>
				{user.info && (
					<>
						{user.info.address && (
							<div className="my-2">
								<li>{user.info.address}</li>
							</div>
						)}
						{user.info.phone && (
							<div className="my-2">
								<li>{user.info.phone}</li>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}
