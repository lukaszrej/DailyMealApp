import React from 'react';
import { headCells } from '../../utils/mealTableConfig';
import * as T from "../../utils/constants";
import * as S from "../../styles";

interface TableHeadProps {
	numSelected: number;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	rowCount: number;
}

const MealTableHead = (props: TableHeadProps) => {
	const { onSelectAllClick, numSelected, rowCount } = props;

	return (
		<S.TableHead>
			<S.TableRow>
				<S.TableCell padding='checkbox'>
					<S.Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ 'aria-label': T.SELECT_ALL_PRODUCTS_ARIA }}
					/>
				</S.TableCell>
				{headCells.map((headCell) => (
					<S.TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'default'}
					>
						{headCell.label}
					</S.TableCell>
				))}
			</S.TableRow>
		</S.TableHead>
	);
};

export default MealTableHead;
