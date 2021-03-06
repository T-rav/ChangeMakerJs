/* 
 * NOTE : this test file uses a beforeEach instead of a builder like other file changeMaker.withBuilder.spec
 * I DO NOT ADVOATE THIS STYLE - It is here for reference and comparison only!
 */
describe("ChangeMaker", function () {
	describe("Calculate_Change_For",function(){
		describe("Given no change to return", function(){
			let changeMaker;
			beforeEach(function(){
				changeMaker = new ChangeMaker([]);
			});

			it("Should return zero coins", function() {
				// arrange
				const tenderedAmount = 1.00;
				const purchaseAmount = 1.00;
				// act
				let actual = changeMaker.Calculate_Change_For(tenderedAmount, purchaseAmount);
				// assert
				expect(actual).toEqual([]);
			});
		});
		describe("Given change to return when using Norwegian Krone", function(){
			let changeMaker;
			beforeEach(function(){
				changeMaker = new ChangeMaker([1,5,10,20]);
			});

			describe("When change is only made up of one coin", function(){
				[
					{tender:2.00, purchase:1.80, change:[20]},
					{tender:2.50, purchase:2.40, change:[10]},
					{tender:3.00, purchase:2.95, change:[5]},
					{tender:1.00, purchase:0.99, change:[1]}
				]
				.forEach(interaction=>{
					it("Should return one "+interaction.change+" cent coin", function() {
						// arrange
						const tenderedAmount = interaction.tender;
						const purchaseAmount = interaction.purchase;
						// act
						let actual = changeMaker.Calculate_Change_For(tenderedAmount, purchaseAmount);
						// assert
						expect(actual).toEqual(interaction.change);
					});
				});
			});
			describe("When change is made up of all coins", function(){
				it("Should return one of each coin", function() {
					// arrange
					const tenderedAmount = 3.00;
					const purchaseAmount = 2.64;
					// act
					let actual = changeMaker.Calculate_Change_For(tenderedAmount, purchaseAmount);
					// assert
					expect(actual).toEqual([20,10,5,1]);
				});
			});
		});
		describe("Given change to return when using US Dollar", function(){
			let changeMaker;

			beforeEach(function(){
				changeMaker = new ChangeMaker([1,5,10,25]);
			});
			describe("When change is only made up of one coin", function(){
				[
					{tender:3.00, purchase:2.75, change:[25]},
					{tender:1.50, purchase:1.40, change:[10]},
					{tender:1.00, purchase:0.95, change:[5]},
					{tender:2.00, purchase:1.99, change:[1]}
				]
				.forEach(interaction=>{
					it("Should return one "+interaction.change+" cent coin", function() {
						// arrange
						const tenderedAmount = interaction.tender;
						const purchaseAmount = interaction.purchase;
						// act
						let actual = changeMaker.Calculate_Change_For(tenderedAmount, purchaseAmount);
						// assert
						expect(actual).toEqual(interaction.change);
					});
				});
			});
			describe("When change is made up of all coins", function(){
				it("Should return one of each coin", function() {
					// arrange
					const tenderedAmount = 2.00;
					const purchaseAmount = 1.59;
					// act
					let actual = changeMaker.Calculate_Change_For(tenderedAmount, purchaseAmount);
					// assert
					expect(actual).toEqual([25,10,5,1]);
				});
			});
		});
		describe("Given change to return when using British Pound", function(){
			let changeMaker;

			beforeEach(function(){
				changeMaker = new ChangeMaker([1,2,5,10,20,50]);
			});
			describe("When change is only made up of one coin", function(){
				[
					{tender:6.00, purchase:5.50, change:[50]},
					{tender:1.80, purchase:1.60, change:[20]},
					{tender:0.50, purchase:0.40, change:[10]},
					{tender:2.00, purchase:1.95, change:[5]},
					{tender:5.00, purchase:4.98, change:[2]},
					{tender:8.00, purchase:7.99, change:[1]}
				]
				.forEach(interaction=>{
					it("Should return one "+interaction.change+" cent coin", function() {
						// arrange
						const tenderedAmount = interaction.tender;
						const purchaseAmount = interaction.purchase;
						// act
						let actual = changeMaker.Calculate_Change_For(tenderedAmount, purchaseAmount);
						// assert
						expect(actual).toEqual(interaction.change);
					});
				});
			});
			describe("When change is made up of all coins", function(){
				it("Should return one of each coin", function() {
					// arrange
					const tenderedAmount = 3.00;
					const purchaseAmount = 2.12;
					// act
					let actual = changeMaker.Calculate_Change_For(tenderedAmount, purchaseAmount);
					// assert
					expect(actual).toEqual([50,20,10,5,2,1]);
				});
			});
		});
	});
});

