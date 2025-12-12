insertData: async () => {
 	const customer = await addCustomer.run();
 	closeModal('mdl_newCustomer');
 	showAlert('Customer Created', 'success');
 	getCustomers.run();
 }