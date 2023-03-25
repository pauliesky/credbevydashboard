import loandata from '../assets/loandata';
import ProgressBars from './ProgressBar';

const LoanTypes = () => {
	return (
		<div className="flex flex-col items-start gap-8 lg:gap-6 w-full">
			{loandata.map((data, i) => (
				<div key={i} className="flex flex-col items-start gap-1 w-full">
					<div className="flex justify-between items-center w-full">
						<span
							style={{
								color: '#33333',
								fontSize: '12px',
								fontWeight: '500',
							}}
						>
							{data.desc}
						</span>
						<span
							style={{
								color: `${data.numbersColor}`,
								fontSize: '12px',
								fontWeight: '500',
							}}
						>
							{data.numbers}
						</span>
					</div>
					<ProgressBars
						completed={data.completed}
						baseBgColor={data.baseBgColor}
						bgColor={data.bgColor}
					/>
				</div>
			))}
		</div>
	);
};

export default LoanTypes;
