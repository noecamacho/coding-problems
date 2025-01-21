import pandas as pd

def meltTable(report: pd.DataFrame) -> pd.DataFrame:
    melted_df = report.melt(
        id_vars=['product'],              # Column to keep as is
        value_vars=['quarter_1', 'quarter_2', 'quarter_3', 'quarter_4'],  # Columns to melt
        var_name='quarter',               # Name for the new column storing quarter names
        value_name='sales'                # Name for the new column storing sales values
    )
    return melted_df